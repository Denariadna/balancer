# s0709-22
Денисова Арина Романовна
## Лабораторная работа №1

1. REST API сервер
2. Балансировщик нагрузки
3. Упаковка приложения в Docker-контейнер
4. Запуск проекта в Docker Compose

### 1. REST API сервер

Сервер должен принимать HTTP запросы на порт :6080 и реализовывать функционал CRUD (Create, Read, Update, Delete) по следующим конечным точкам:
* /api/v1/contact
* /api/v1/group

Каждая конечная точка должна обрабатывать HTTP запросы типа POST, GET, PUT, DELETE и вызывать для них соответствующие функции Create, Read, Update, Delete для объектов Contact и Group.

!!! Функционал обработки данных реализовывать не нужно !!!
Все функции должны уметь просто принимать на вход структуру и возвращать в качестве ответа пустую структуру нужного типа.

(перевожу на русский язык: просто реализуем функции "заглушки")

Для реализации кода сервера можно использовать __любой удобный для вас__ язык программирования.

#### Структура объекта Contact

```
type Contact struct {
   ID int
   Username string
   GivenName string
   FamilyName string
   Phone []struct{
      TypeID int
      CountryCode int
      Operator int
      Number int
   }
   Email []string
   Birthdate date
}
```

#### Структура объекта Group

```
type Group struct {
   ID id
   Title string
   Description string
   Contacts []int
}
```

### 2. Балансировщик нагрузки

В качестве балансировщика используем сервер NGINX. 

* запросы /api/v1/contact должны распределяться между тремя запущенными контейнерами с приложением
* запросы /api/v1/group должны проксироваться в один контейнер с приложением

Всего должны быть запущены три контейнера с приложением.

### 3. Упаковка приложения в Docker-контейнер

Из исходных кодов программы необходимо собрать готовые для запуска Docker контейнеры.

!!! Сборка контейнеров может отличаться в зависимости от использования типа языка (интерпретируемый или компилируемый).

### 4. Запуск проекта в Docker Compose

В проекте Docker Compose необходимо запустить сервис с настроенным балансировщиком NGINX и три экземпляра сервиса с контейнером приложения.