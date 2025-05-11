# Meander - Официальный сайт

Это официальный сайт для программы Meander, предназначенной для создания текстовых квестов на Android.

## Структура проекта

```
├── index.html          # Главная страница сайта
├── styles.css          # Стили для сайта
├── js/                 # Директория с JavaScript файлами
│   └── main.js         # Основной JavaScript файл
├── images/             # Директория с изображениями
├── data/               # Директория с данными
│   ├── news.json       # Данные для новостей
│   └── builds.json     # Данные для билдов
└── builds/             # Директория с страницами билдов
    ├── build-template.html  # Шаблон для страницы билда
    └── v2.1.0.html     # Страница для билда v2.1.0
```

## Добавление новостей

Для добавления новых новостей необходимо отредактировать файл `data/news.json`. Формат данных:

```json
[
    {
        "id": 1,
        "date": "20.09.2023",
        "title": "Заголовок новости",
        "content": "Содержание новости"
    }
]
```

## Добавление билдов

Для добавления новых билдов необходимо:

1. Отредактировать файл `data/builds.json`. Формат данных:

```json
[
    {
        "id": 1,
        "version": "v2.1.0",
        "date": "10.10.2023",
        "notes": [
            "Примечание 1",
            "Примечание 2"
        ],
        "downloadUrl": "https://example.com/download"
    }
]
```

2. Создать страницу для билда в директории `builds/`, скопировав шаблон `build-template.html` и заменив все необходимые данные.

## Тема сайта

Сайт имеет темную тему с акцентным зеленым цветом. Пользователи могут переключаться между темной и светлой темой с помощью кнопки в верхнем правом углу сайта.

## Контактная информация

Разработчик: Иллюминат

- Simple X chat: [Написать разработчику](https://simplex.chat/contact#/?v=2-7&smp=smp%3A%2F%2FZKe4uxF4Z_aLJJOEsC-Y6hSkXgQS5-oc442JQGkyP8M%3D%40smp17.simplex.im%2F1EILr8xj2yZjzQBcXVzkTmXY1opDTAx7%23%2F%3Fv%3D1-3%26dh%3DMCowBQYDK2VuAyEAjKTCAPfDNjggdcRXS01ojabUTaatoKSDpL2iImb_Kkk%253D%26srv%3Dogtwfxyi3h2h5weftjjpjmxclhb5ugufa5rcyrmg7j4xlch7qsr5nuqd.onion)
- Telegram: [meanderRU](https://t.me/meanderRU)
- Пикабу: [@meanderRU](https://pikabu.ru/@meanderRU)
- YouTube: [@meanderRU](https://www.youtube.com/@meanderRU)
- ВКонтакте: [meanderRU](https://vk.com/meanderRU)

## Поддержать проект

Вы можете поддержать разработку Meander на [Boosty](https://boosty.to/iilluminat)

## Репозиторий

GitLab: [https://gitlab.com/workspace3242818/Meander](https://gitlab.com/workspace3242818/Meander) 