import React from 'react';
import {NavLink} from 'react-router-dom';

import './Sql.scss';
import './Lesson.scss'

const Sql2 = () => {
    return (
        <div className="lesson">
            <div class="article-content"><h3>Получение данных из таблицы</h3><hr />&nbsp;<div class="markdown-container"><p>Наступила пора сделать что-нибудь полезное, например получить все данные из таблицы. Для получения всех данных из таблицы с названием <code>table1</code> достаточно выполнить запрос: </p><pre class="  language-sql"><code class="  language-sql"><span class="token keyword">SELECT</span> <span class="token operator">*</span>
            &nbsp;
            <span class="token keyword">FROM</span> table1</code></pre><p>Из какой таблицы выбирать данные указывается после ключевого слова <code>FROM</code>. О необходимости выбора всех полей из таблицы говорит <code>*</code>.</p><p>Зачастую нужно получить не все столбцы таблицы, а какую-то их часть. Чтобы выбрать определенные столбцы, нужно перечислить их через запятую после ключевого слова <code>SELECT</code>.  Например, чтобы получить столбцы <code>col1</code>, <code>col2</code> и <code>col3</code> из таблицы <code>table1</code>, нужно написать следующий запрос:</p><pre class="  language-sql"><code class="  language-sql"><span class="token keyword">SELECT</span> col1<span class="token punctuation">,</span> col2<span class="token punctuation">,</span> col3
            &nbsp;
            <span class="token keyword">FROM</span> table1</code></pre><p>Столбцам в запросе можно назначить псевдоним (по сути переименовать столбец). Это необходимо делать как минимум при выполнении в списке выборки операций над столбцами таблицы, конкатенации строк, вызове функции и т.д.</p><p>Для назначение столбцу псевдонима, следует после выражения написать ключевое слово <code>AS</code> и за ним новое название, например:</p><pre class="  language-sql"><code class="  language-sql"><span class="token keyword">SELECT</span> <span class="token number">1</span> <span class="token keyword">AS</span> one<span class="token punctuation">,</span> <span class="token string">'Бим'</span> <span class="token keyword">AS</span> dog_name</code></pre><p>Слово <code>AS</code> является необязательным и его можно опустить. Вышеуказанный пример можно переписать в следующей форме:</p><pre class="  language-sql"><code class="  language-sql"><span class="token keyword">SELECT</span> <span class="token number">1</span> one<span class="token punctuation">,</span> <span class="token string">'Бим'</span> dog_name</code></pre><p>Псевдонимы как и все идентификаторы и ключевые слова SQL должны начинаться с буквы (a-z) или подчёркивания (_). Последующими символами могут быть буквы, цифры (0-9), знаки доллара ($) или подчёркивания.</p><p>Псевдонимы без кавычек воспринимаются системой без учёта регистра. Таким образом <code>dog_name</code>, <code>DOG_NAME</code>, <code>Dog_Name</code> являются идентичными.</p><p>Если заключить псевдоним в двойные кавычки, то он становится регистрочувствительным и может состоять из произвольной последовательности символов, например "имя собаки", "1", "dogName".</p><p>Максимальная длина псевдонима равна 63 символам, хотя ее можно изменить в настройках сервера.</p></div></div>

            <p>&nbsp;</p>
            <hr />

            <div className="lesson-nav">
                <NavLink to="/sql1" className="waves-effect waves-light btn-large nav-bottom"> &larr; Предыдущий урок </NavLink>
                <NavLink to="/sql3" className="waves-effect waves-light btn-large nav-bottom"> Следующий урок &rarr; </NavLink>
            </div>

        </div>
    );
}

export default Sql2;
