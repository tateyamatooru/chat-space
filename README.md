# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## members table

|Column|Tyoe|Options|
|------|----|-------|
|user|reference|null: false, foreign_key: true|
|group|reference|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## users table


|Column|Tyoe|Options|
|------|----|-------|
|name|string|index: true, null: false, unique: true|

### Association
- has_many :groups, through: members
- has_many :messages
- has_many :members


## messages table


|Column|Tyoe|Options|
|------|----|-------|
|body|text|
|image|string|
|group|reference|null: false, forget_key: true|
|user|reference|null: folse, forget_key: true|

### Association
- belongs_to :user
- belongs_to :group

## groups table

|Column|Tyoe|Options|
|------|----|-------|
|name|string|null: false

### Association
- has_many :users, through: members
- has_many :members
- has_many :messages
