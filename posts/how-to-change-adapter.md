---
title: "切換專案資料庫 How to switch Database adapter"
description: "試著為rails學習專案中更改預設資料庫(sqlite3 to PostgreSQL)"
date: "2020-04-15"
---

# 切換專案資料庫 How to switch Database adapter

#### 1.需在電腦中先完成安裝 postgres

(詳情請見資料庫操作文章)
Install postgres on our local machine. Get Postgres
Add a helpful tool called pgAdmin. Get pgAdmin
Change our Gemfile in our rails app.
Run bundle install to get postgres gem.
Change the database.yml file to use postgres.
Make sure Postgres is up on our machine. (just start the app and it should automagically start up)
Run rake db:setup followed by rake db:migrate
Run rails server
Go to localhost:3000 and see no exceptions!

#### 檢查專案 Gemfile 中有無相關資料庫插件

ps. 有時候在終端機執行 rails 指令無反應，可以試試`spring stop`來停止 rails
<img src="~/projects/rocketgirl.io/src/images/spring_stop.png" style="zoom:70%" />
