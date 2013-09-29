# Order by "IN"
SELECT * FROM `comments` WHERE `id` IN ('12','5','3','17') ORDER BY FIELD(`id`, '12','5','3','17')