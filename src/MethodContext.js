import { EventEmitter } from './EventEmitter';

/*
1) В методе subscribe подпишитесь на событие click с помощью EventEmitter.on(eventName, callback).
В обработчике нужно увеличивать значение поля count на 1
2)В методе unsubscribe отпишитесь от события click с помощью EventEmitter.off(eventName, callback).
В качестве callback нужно передавать тот же самый обработчик, который был передан при подписке.
 */
export const obj = {
    count: 0,
    _callback: null, // Сохраняем сюда обработчик, чтобы иметь к нему доступ в unsubscribe

    subscribe() {
        // Если обработчик еще не создан, создаем его (используем стрелочную функцию для сохранения this)
        if (!this._callback) {
            this._callback = () => {
                this.count += 1;
            };
        }
        EventEmitter.on('click', this._callback);
    },

    unsubscribe() {
        // Отписываемся, передавая ту же самую функцию
        if (this._callback) {
            EventEmitter.off('click', this._callback);
        }
    },
};

/*
Сделайте так, чтобы метод first вызывал метод second со своими аргументами, но в обратном порядке:

obj1.first(1, 2, 3);
// Внутренний вызов должен быть равносилен obj1.second(3, 2, 1)
 */
export const obj1 = {
    first(...args) {
        // args собирает все аргументы в массив.
        // reverse() переворачивает массив.
        // ... разворачивает его обратно в отдельные аргументы для метода second.
        return this.second(...args.reverse());
    },
    second() {
        // здесь ничего писать не нужно
    },
};
