# Админ панель для MWS Corp

Это административная панель для управления контентом MWS Corp. Панель предоставляет интерфейс для управления пользователями, курсами, блогами и другими ресурсами.

## Начало работы

Для запуска проекта вам понадобится Docker. Убедитесь, что следующие порты свободны на вашей машине: `5200`, `5432`, `5433`, `5201`.

### Шаги для запуска:

1. **Установка Docker**  
   Перейдите на [официальный сайт Docker](https://docs.docker.com/get-docker/) и скачайте версию Docker для вашей операционной системы.

2. **Освобождение портов**  
   Убедитесь, что порты `5200`, `5432`, `5433`, `5201` не используются другими процессами.

3. **Запуск проекта**  
   Откройте терминал в корневой директории проекта и выполните одну из следующих команд в зависимости от вашей версии Docker:
-
   Для Docker Compose V2:
    ```bash
    docker compose -f ./docker-compose.dev.yaml up --build
    ```
-
   Для Docker Compose V1:
    ```bash
    docker-compose -f ./docker-compose.dev.yaml up --build
    ```
## Документация API

После запуска проекта документация к API будет доступна по пути `/api/docs`. Здесь описание всех доступных эндпоинтов и примеры использования.

## Дальнейшее развитие

В планах по развитию проекта - добавление типизации и переход к возвращаемым объектам Response Object (RO) для фронтенда в следующем формате:
```javascript
{
"user": {
    // Атрибуты пользователя...
    }
}
```

На текущий момент, данные возвращаются в обычном формате:

```javascript
{
// Атрибуты пользователя без обертки...
}
```