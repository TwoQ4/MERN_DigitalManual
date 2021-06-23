import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
    return (
        <div className="container">
            <h3>Основы проектирования баз данных</h3>
            <hr />
            <div className="collection">

                <Link className="collection-item" to="/lesson1">
                        Лекция 1. Введение в базы данных. Основные понятия и определения
                </Link>
                
                <Link className="collection-item" to="/lesson2">
                 Лекция 2. Реляционные базы данных. Ограничения целостности
                </Link>

                <Link className="collection-item" to="/lesson3">
                    Лекция 3. Принципы построения баз данных. Жизненный цикл баз данных
                </Link>

                <Link className="collection-item" to="/lesson4">
                   Лекция 4. Архитектура БД
                </Link>


            </div>
        </div>
    );
}

export default MainPage;
