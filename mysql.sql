# Order by "IN"
SELECT * FROM `comments` WHERE `comments`.`id` IN ('12','5','3','17') ORDER BY FIELD(`comments`.`id`, '12','5','3','17')