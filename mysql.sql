# Order by "IN"
SELECT * FROM `comments` WHERE `id` IN ('12','5','3','17') ORDER BY FIELD(`id`, '12','5','3','17')

# Replace example
UPDATE `wp_posts`
SET `post_content` = REPLACE (
	`post_content`,
	'http://fjuz.net/wordpress/wp-content/uploads/',
	'http://fjuz.net/wp-content/uploads/'
)