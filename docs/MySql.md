---
id: lei4
title: MySQL
---

-- 运维网址

ftp://116.228.172.181/  -- 刷机后生成文件网址
ftp://ftpkf.ihotwind.cn  --接收运维工具脚本生成的网址
localhost:8080/hw-pos-service  -- 检查POS服务

21062513211207471683 --大众点评专属凉拖10元券
21042631258304305232 --直播间一元袜子券
20072322422724875036 --五元无门槛券

http://posupdate.ihotwind.cn/crm/oauth/token?grant_type=client_credentials&client_id=weimob&client_secret=eeef5b04-772a-44ad-8112-6389b30c09d9&scope=all --先执行get请求，获取access_token
http://posupdate.ihotwind.cn/crm/oauth/coupon/deliver --再执行post请求，修改参数

---门店所有买单流水查询

```sql
select p.BillNo, pm.PayModeID, pm.PayModeName, p.CreateDate, p.ModifyDate
 from hw_pos_salpospay p, hw_pos_pay_mode pm where p.PayID = pm.PayModeID and p.StoreID = '40002014'
-- and p.PayID = 81
 and p.CreateDate > '2021-06-05' 
order by p.CreateDate;
```

---当天未产生微信或支付宝买单的门店

```sql
select m.StoreID from 
(select StoreID from hw_pos_salposmst where BillDate >= date(now()) group by StoreID) m LEFT JOIN
(select StoreID, PayID from hw_pos_salpospay where PayID in (81, 61) and CreateDate >= date(now()) group by StoreID, PayID HAVING count(1) != 0) p
 on m.StoreID = p.StoreID where p.StoreID is null;
```

---库存是否销售

```sql
SELECT  skucode,result FROM posabnormaltraderecord WHERE billno = '11002161221051000007'
```

-- 按调拨单号查询入库单据

```sql
SELECT * FROM receivesheet WHERE unitid ='13002055' AND DisOrderNo ='HD210328011_13-P1'
```

-- 暂存数据处理

```sql
DELETE from swmsunit.allocationorderdetail_temporary;
delete from swmsunit.allocationorder_temporary
```

--单据状态明细查询

```sql
SELECT * FROM receivesheet WHERE receivesheetno = 'ReqMV100957811'
```

--超时买单记录查询

```sql
select * from hw_pos_salpospay_return where BILL_NO = '12012030221041000022';
```

--超时买单记录明细查询

```sql
SELECT * FROM hw_pos_salposmst WHERE billno
```

POS查询：

```sql
SELECT * FROM hw_hrs_store_ownership WHERE store_id = '14029991';-- 门店信息
SELECT * FROM hw_hdds_write_rule;-- 写入规则（58）
SELECT * FROM hw_pos_return_reason-- 退货原因（46）
SELECT * FROM hw_pos_user WHERE store_id='14029991' AND RECORD_STATE ='Y'-- 人员信息
SELECT * FROM hw_pos_machine WHERE storeid = '14029991' AND recordstate = 'Y';-- pos编码
SELECT * FROM hw_pos_store_pay_mode WHERE storeid = '14029991' AND recordstate='Y' -- 支付方式
```

-- 测试账号

```sql
REPLACE INTO hotwind_pos.hw_pos_user (`STORE_ID`    , `GROUP_ID`, `ROLE_ID`             , `USER_ID`, `USER_CODE`, `USER_NAME`, `LOGIN_NAME`   , `USER_PWD`                           , `MOBILE`, `CREATE_USER_ID`, `CREATE_DATE`, `MODIFY_USER_ID`, `MODIFY_DATE`, `RECORD_STATE`) 
VALUES  ( (SELECT store_id FROM hotwind_pos.hw_hrs_store) , '0'       , '16050315836080395372', '1'      , '测试账号' , '测试账号' , (SELECT CONCAT(store_id,'ceshizhanghao') FROM hotwind_pos.hw_hrs_store), 'D896879DDE2B25ACDCDEFE8D970ADE41'   , ''      , 'HR_system'     , NOW()        , 'HR_system'     , NOW()        , 'Y'           );
```

SWMS：

```sql
SELECT 'rolemenumapping' AS tablename , COUNT(*) AS COUNT FROM rolemenumapping WHERE isdelete = 0 UNION ALL  -- 全渠道权限

SELECT 'menu' AS tablename , COUNT(*) AS COUNT FROM menu WHERE isdelete = 0 UNION ALL
SELECT 'unit' AS tablename , COUNT(*) AS COUNT FROM unit WHERE isdelete = 0 UNION ALL  -- 全渠道菜单

SELECT 'changestock' AS tablename , COUNT(*) AS COUNT FROM changestock WHERE unitid = '70009991' AND isdelete = 0 UNION ALL  -- 调整单

SELECT 'imperfections' AS tablename , COUNT(*) AS COUNT FROM imperfections WHERE unitid = '70009991' AND isdelete = 0 UNION ALL  -- 报损主表

SELECT 'imperfectiondetail' AS tablename , COUNT(*) AS COUNT FROM imperfectiondetail WHERE unitid = '70009991' AND isdelete = 0 UNION ALL   -- 报损明细

SELECT 'imperfectionnotice' AS tablename , COUNT(*) AS COUNT FROM imperfectionnotice WHERE unitid = '70009991' AND isdelete = 0 UNION ALL   -- 商品通知报损单

SELECT 'allocationorder' AS tablename , COUNT(*) AS COUNT FROM allocationorder WHERE unitid = '70009991' AND isdelete = 0 UNION ALL  -- 调拨单

SELECT 'allocationorderdetail' AS tablename , COUNT(*) AS COUNT FROM allocationorderdetail WHERE unitid = '70009991' AND isdelete = 0 UNION ALL  -- 调拨明细

SELECT 'user' AS tablename , COUNT(*) AS COUNT FROM USER WHERE unitid = '70009991' AND isdelete = 0 UNION ALL  -- 手持操作用户

SELECT 'userrolemapping' AS tablename , COUNT(*) AS COUNT FROM userrolemapping WHERE unitid = '70009991' AND isdelete = 0 UNION ALL  -- 操作用户权限

SELECT 'receivesheet' AS tablename , COUNT(*) AS COUNT FROM receivesheet WHERE unitid ='70009991' AND isdelete = 0 UNION ALL  -- 入库单

SELECT 'receivesheetdetail' AS tablename , COUNT(*) AS COUNT FROM receivesheetdetail WHERE unitid ='70009991' AND isdelete = 0 UNION ALL  -- 入库单明细

SELECT 'receivesheetconfirm' AS tablename , COUNT(*) AS COUNT FROM receivesheetconfirm WHERE unitid ='70009991' AND ordertype <> 6 AND isdelete = 0 UNION ALL  -- 已入库单

SELECT 'instockdetailtwo' AS tablename , COUNT(*) AS COUNT FROM instockdetailtwo WHERE unitid ='70009991' AND isdelete = 0 AND receivesheetno IN (
SELECT 'receivesheetno' FROM receivesheetconfirm WHERE unitid ='70009991' AND ordertype <> 6 AND isdelete = 0 ) UNION ALL  -- 已入库明细

SELECT 'shelflocation' AS tablename , COUNT(*) AS COUNT FROM shelflocation WHERE unitid ='70009991' AND isdelete='0' --  库位表

SELECT * FROM unit
SELECT * FROM shelflocation WHERE unitid = '70009991';  -- 查询门店库位

SELECT * FROM online_time WHERE unitid = '70009991';  -- 查询上线盘点时间

SELECT * FROM online_store WHERE unitid = '70009991'; -- 查询上线盘点关联

INSERT INTO `online_store` (`UnitID`, `OLType`, `CanReceiveOrder`) VALUES ('11002164', '1', '1');  --  查询上线盘点关联补档执行语句

SELECT * FROM hotwind_pos.`hw_hdds_write_rule` WHERE CODE LIKE '%_db';

SELECT * FROM newchecktask WHERE isdelete='0' AND unitid = '70009991';-- 盘点单

SELECT * FROM newcheckresult WHERE unitid = '70009991' AND checktaskid ='19771e34-bf3b-47d5-8cdf-c454a1c312d0'-- 盘点明细

SELECT shelflocationcode,COUNT(1) FROM shelflocation WHERE isdelete='0'
GROUP BY shelflocationcode
HAVING COUNT(1)>'1'-- 重复库位
```



-- 补特殊库位

```sql
DELIMITER $$
CREATE PROCEDURE proc_tempProCP00001()
BEGIN
	select count(*) into @count from swmsunit.shelflocation where unitid = (select UNITID FROM SWMSUNIT.ONLINE_TIME) and ShelfLocationCode = 'CP00001' and isdelete = 0;
	if(@count=0) THEN  
	INSERT INTO `shelflocation`(`ShelfLocationID`,`ShelfLocationCode`,`ShelfLocationName`,`ShelfLocationTypeID`,`ShelfLocationRow`,`ShelfLocationColumn`,`ShelfLocationLimitHeight`,`ShelfLocationLimitWidth`,`ShelfLocationLimitWeight`,`Status`,`ShelfID`,`UnitID`,`CustomerID`,`CreateBy`,`CreateTime`,`LastUpdateBy`,`LastUpdateTime`,`IsDelete`,`IsStartCheck`)
VALUES(UUID(),'CP00001','报损仓','2',NULL,NULL,NULL,NULL,NULL,'1',NULL,(select UNITID FROM SWMSUNIT.ONLINE_TIME),'hotwind',NULL,'2016-10-22',NULL,'2017-05-16','0','0');
	end if;
end $$
DELIMITER ;
call proc_tempProCP00001;
DROP PROCEDURE IF EXISTS proc_tempProCP00001;

DELIMITER $$
CREATE PROCEDURE proc_tempProSC00001()
BEGIN
	select count(*) into @count from swmsunit.shelflocation where unitid = (select UNITID FROM SWMSUNIT.ONLINE_TIME) and ShelfLocationCode = 'SC00001' and isdelete = 0;
	if(@count=0) THEN  
	INSERT INTO `shelflocation`(`ShelfLocationID`,`ShelfLocationCode`,`ShelfLocationName`,`ShelfLocationTypeID`,`ShelfLocationRow`,`ShelfLocationColumn`,`ShelfLocationLimitHeight`,`ShelfLocationLimitWidth`,`ShelfLocationLimitWeight`,`Status`,`ShelfID`,`UnitID`,`CustomerID`,`CreateBy`,`CreateTime`,`LastUpdateBy`,`LastUpdateTime`,`IsDelete`,`IsStartCheck`)
VALUES(UUID(),'SC00001','SC00001','2',NULL,NULL,NULL,NULL,NULL,'1',NULL,(select UNITID FROM SWMSUNIT.ONLINE_TIME),'hotwind',NULL,'2016-10-22',NULL,'2017-05-16','0','0');
	end if;
end $$
DELIMITER ;
call proc_tempProSC00001;
DROP PROCEDURE IF EXISTS proc_tempProSC00001;

DELIMITER $$
CREATE PROCEDURE proc_tempProDF00001()
BEGIN
	select count(*) into @count from swmsunit.shelflocation where unitid = (select UNITID FROM SWMSUNIT.ONLINE_TIME) and ShelfLocationCode = 'DF00001' and isdelete = 0;
	if(@count=0) THEN  
	INSERT INTO `shelflocation`(`ShelfLocationID`,`ShelfLocationCode`,`ShelfLocationName`,`ShelfLocationTypeID`,`ShelfLocationRow`,`ShelfLocationColumn`,`ShelfLocationLimitHeight`,`ShelfLocationLimitWidth`,`ShelfLocationLimitWeight`,`Status`,`ShelfID`,`UnitID`,`CustomerID`,`CreateBy`,`CreateTime`,`LastUpdateBy`,`LastUpdateTime`,`IsDelete`,`IsStartCheck`)
VALUES(UUID(),'DF00001','差异仓','2',NULL,NULL,NULL,NULL,NULL,'1',NULL,(select UNITID FROM SWMSUNIT.ONLINE_TIME),'hotwind',NULL,'2016-10-22',NULL,'2017-05-16','0','0');
	end if;
end $$
DELIMITER ;
call proc_tempProDF00001;
DROP PROCEDURE IF EXISTS proc_tempProDF00001;

DELIMITER $$
CREATE PROCEDURE proc_tempProOW00001()
BEGIN
	select count(*) into @count from swmsunit.shelflocation where unitid = (select UNITID FROM SWMSUNIT.ONLINE_TIME) and ShelfLocationCode = 'OW00001' and isdelete = 0;
	if(@count=0) THEN  
	INSERT INTO `shelflocation`(`ShelfLocationID`,`ShelfLocationCode`,`ShelfLocationName`,`ShelfLocationTypeID`,`ShelfLocationRow`,`ShelfLocationColumn`,`ShelfLocationLimitHeight`,`ShelfLocationLimitWidth`,`ShelfLocationLimitWeight`,`Status`,`ShelfID`,`UnitID`,`CustomerID`,`CreateBy`,`CreateTime`,`LastUpdateBy`,`LastUpdateTime`,`IsDelete`,`IsStartCheck`)
VALUES(UUID(),'OW00001','外仓','2',NULL,NULL,NULL,NULL,NULL,'1',NULL,(select UNITID FROM SWMSUNIT.ONLINE_TIME),'hotwind',NULL,'2016-10-22',NULL,'2017-05-16','0','0');
	end if;
end $$
DELIMITER ;
call proc_tempProOW00001;
DROP PROCEDURE IF EXISTS proc_tempProOW00001;

DELIMITER $$
CREATE PROCEDURE proc_tempProEX00001()
BEGIN
	select count(*) into @count from swmsunit.shelflocation where unitid = (select UNITID FROM SWMSUNIT.ONLINE_TIME) and ShelfLocationCode = 'EX00001' and isdelete = 0;
	if(@count=0) THEN  
	INSERT INTO `shelflocation`(`ShelfLocationID`,`ShelfLocationCode`,`ShelfLocationName`,`ShelfLocationTypeID`,`ShelfLocationRow`,`ShelfLocationColumn`,`ShelfLocationLimitHeight`,`ShelfLocationLimitWidth`,`ShelfLocationLimitWeight`,`Status`,`ShelfID`,`UnitID`,`CustomerID`,`CreateBy`,`CreateTime`,`LastUpdateBy`,`LastUpdateTime`,`IsDelete`,`IsStartCheck`)
VALUES(UUID(),'EX00001','样品库','2',NULL,NULL,NULL,NULL,NULL,'1',NULL,(select UNITID FROM SWMSUNIT.ONLINE_TIME),'hotwind',NULL,'2016-10-22',NULL,'2017-05-16','0','0');
	end if;
end $$
DELIMITER ;
call proc_tempProEX00001;
DROP PROCEDURE IF EXISTS proc_tempProEX00001;

DELIMITER $$
CREATE PROCEDURE proc_tempProOC00001()
BEGIN
	select count(*) into @count from swmsunit.shelflocation where unitid = (select UNITID FROM SWMSUNIT.ONLINE_TIME) and ShelfLocationCode = 'OC00001' and isdelete = 0;
	if(@count=0) THEN  
	INSERT INTO `shelflocation`(`ShelfLocationID`,`ShelfLocationCode`,`ShelfLocationName`,`ShelfLocationTypeID`,`ShelfLocationRow`,`ShelfLocationColumn`,`ShelfLocationLimitHeight`,`ShelfLocationLimitWidth`,`ShelfLocationLimitWeight`,`Status`,`ShelfID`,`UnitID`,`CustomerID`,`CreateBy`,`CreateTime`,`LastUpdateBy`,`LastUpdateTime`,`IsDelete`,`IsStartCheck`)
VALUES(UUID(),'OC00001','补货仓','2',NULL,NULL,NULL,NULL,NULL,'1',NULL,(select UNITID FROM SWMSUNIT.ONLINE_TIME),'hotwind',NULL,'2016-10-22',NULL,'2017-05-16','0','0');
	end if;
end $$
DELIMITER ;
call proc_tempProOC00001;
DROP PROCEDURE IF EXISTS proc_tempProOC00001;



DELIMITER $$
CREATE PROCEDURE proc_tempProA010101()
BEGIN
	select count(*) into @count from swmsunit.shelflocation where unitid = (select UNITID FROM SWMSUNIT.ONLINE_TIME) and ShelfLocationCode = 'A010101' and isdelete = 0;
	if(@count=0) THEN  
	INSERT INTO `shelflocation`(`ShelfLocationID`,`ShelfLocationCode`,`ShelfLocationName`,`ShelfLocationTypeID`,`ShelfLocationRow`,`ShelfLocationColumn`,`ShelfLocationLimitHeight`,`ShelfLocationLimitWidth`,`ShelfLocationLimitWeight`,`Status`,`ShelfID`,`UnitID`,`CustomerID`,`CreateBy`,`CreateTime`,`LastUpdateBy`,`LastUpdateTime`,`IsDelete`,`IsStartCheck`)
VALUES(UUID(),'A010101','A010101','1',NULL,NULL,NULL,NULL,NULL,'1',NULL,(select UNITID FROM SWMSUNIT.ONLINE_TIME),'hotwind',NULL,'2016-10-22',NULL,'2017-05-16','0','0');
	end if;
end $$
DELIMITER ;
call proc_tempProA010101;
DROP PROCEDURE IF EXISTS proc_tempProA010101;

DELIMITER $$
CREATE PROCEDURE proc_tempProNS00001()
BEGIN
	select count(*) into @count from swmsunit.shelflocation where unitid = (select UNITID FROM SWMSUNIT.ONLINE_TIME) and ShelfLocationCode = 'NS00001' and isdelete = 0;
	if(@count=0) THEN  
	INSERT INTO `shelflocation`(`ShelfLocationID`,`ShelfLocationCode`,`ShelfLocationName`,`ShelfLocationTypeID`,`ShelfLocationRow`,`ShelfLocationColumn`,`ShelfLocationLimitHeight`,`ShelfLocationLimitWidth`,`ShelfLocationLimitWeight`,`Status`,`ShelfID`,`UnitID`,`CustomerID`,`CreateBy`,`CreateTime`,`LastUpdateBy`,`LastUpdateTime`,`IsDelete`,`IsStartCheck`)
VALUES(UUID(),'NS00001','临时未上架库位','4',NULL,NULL,NULL,NULL,NULL,'1',NULL,(select UNITID FROM SWMSUNIT.ONLINE_TIME),'hotwind',NULL,'2016-10-22',NULL,'2017-05-16','0','0');
	end if;
end $$
DELIMITER ;
call proc_tempProNS00001;
DROP PROCEDURE IF EXISTS proc_tempProNS00001;

DELIMITER $$
CREATE PROCEDURE proc_tempProTE00001()
BEGIN
	select count(*) into @count from swmsunit.shelflocation where unitid = (select UNITID FROM SWMSUNIT.ONLINE_TIME) and ShelfLocationCode = 'TE00001' and isdelete = 0;
	if(@count=0) THEN  
	INSERT INTO `shelflocation`(`ShelfLocationID`,`ShelfLocationCode`,`ShelfLocationName`,`ShelfLocationTypeID`,`ShelfLocationRow`,`ShelfLocationColumn`,`ShelfLocationLimitHeight`,`ShelfLocationLimitWidth`,`ShelfLocationLimitWeight`,`Status`,`ShelfID`,`UnitID`,`CustomerID`,`CreateBy`,`CreateTime`,`LastUpdateBy`,`LastUpdateTime`,`IsDelete`,`IsStartCheck`)
VALUES(UUID(),'TE00001','试穿库','3',NULL,NULL,NULL,NULL,NULL,'1',NULL,(select UNITID FROM SWMSUNIT.ONLINE_TIME),'hotwind',NULL,'2016-10-22',NULL,'2017-05-16','0','0');
	end if;
end $$
DELIMITER ;
call proc_tempProTE00001;
DROP PROCEDURE IF EXISTS proc_tempProTE00001;

```

---服务器检查

```sql
SELECT * FROM hw_hrs_store_ownership WHERE store_id = '11002192';-- 门店信息
SELECT * FROM hw_hdds_write_rule;-- 写入规则（58）
SELECT * FROM hw_pos_return_reason-- 退货原因（46）
SELECT * FROM hw_pos_user WHERE store_id='11002192' AND RECORD_STATE ='Y'-- 人员信息
SELECT * FROM hw_pos_machine WHERE storeid = '11002192' AND recordstate = 'Y';-- pos编码
SELECT * FROM hw_pos_store_pay_mode WHERE storeid = '11002192' AND recordstate='Y' -- 支付方式

SELECT * FROM shelflocation WHERE unitid = '11002192';  -- 查询门店库位
SELECT * FROM online_time WHERE unitid = '11002192';  -- 查询上线盘点时间
SELECT * FROM online_store WHERE unitid = '11002192'; -- 查询上线盘点关联

select ID,
BILL_NO,
ORIG_BILL_NO,
RETURN_BILL_NO,
START_BILL_NO,
AMOUNT,
PAY_MODE_ID, 
CREATE_USER_ID,
CREATE_DATE,
MODIFY_USER_ID,
MODIFY_DATE,
RECORD_STATE from hw_pos_salpospay_return  where bill_no like '11002192%';

--  查询上线盘点关联补档执行语句
INSERT INTO `online_store` (`UnitID`, `OLType`, `CanReceiveOrder`) VALUES ('11002192', '1', '1');  --  查询上线盘点关联补档执行语句


-- 测试账号
REPLACE INTO hotwind_pos.hw_pos_user (`STORE_ID`    , `GROUP_ID`, `ROLE_ID`             , `USER_ID`, `USER_CODE`, `USER_NAME`, `LOGIN_NAME`   , `USER_PWD`                           , `MOBILE`, `CREATE_USER_ID`, `CREATE_DATE`, `MODIFY_USER_ID`, `MODIFY_DATE`, `RECORD_STATE`) 
VALUES  ( (SELECT store_id FROM hotwind_pos.hw_hrs_store) , '0'       , '16050315836080395372', '1'      , '测试账号' , '测试账号' , (SELECT CONCAT(store_id,'ceshizhanghao') FROM hotwind_pos.hw_hrs_store), 'D896879DDE2B25ACDCDEFE8D970ADE41'   , ''      , 'HR_system'     , NOW()        , 'HR_system'     , NOW()        , 'Y'           );


localhost:8080/hw-pos-service  -- 检查POS服务

SELECT * FROM hotwind_pos.`hw_hdds_write_rule` WHERE CODE LIKE '%_db';  --  查询下发数据

--新表结构
CREATE TABLE `itemattribute` (
  `ItemID` varchar(80) NOT NULL COMMENT '款号',
  `ColorID` varchar(20) NOT NULL COMMENT '颜色ID',
  `MidType` varchar(20) DEFAULT NULL COMMENT '中分类',
  `MidTypeName` varchar(100) DEFAULT NULL COMMENT '中分类名称',
  `SmallType` varchar(20) DEFAULT NULL COMMENT '小分类',
  `SmallTypeName` varchar(100) DEFAULT NULL COMMENT '小分类名称',
  `SexName` varchar(80) DEFAULT NULL COMMENT '性别',
  `Season` varchar(80) NOT NULL COMMENT '季节',
  `MannerName` varchar(45) DEFAULT NULL COMMENT '风格',
  `SellWave` varchar(45) NOT NULL COMMENT '波段',
  `DisplayArea` varchar(100) DEFAULT NULL COMMENT '系列',
  `MaterialName` varchar(100) DEFAULT '' COMMENT '材质',
  `UseYear` varchar(80) DEFAULT '' COMMENT '使用年份',
  `CreateTime` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) COMMENT '创建时间',
  `LastUpdatetime` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6) COMMENT '最后更新时间',
  PRIMARY KEY (`ItemID`,`ColorID`) USING BTREE,
  KEY `ItemIDIndex` (`ItemID`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC COMMENT='款号关联属性表';

select * from `user`


```
