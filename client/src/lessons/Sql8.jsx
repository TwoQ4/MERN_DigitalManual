import React from 'react';
import {NavLink} from 'react-router-dom';

import './Sql.scss';
import './Lesson.scss'

const Sql8 = () => {
    return (
        
        <div className="lesson">

            <div class="article-content"><h3>Логические операторы</h3><hr/>&nbsp;<div class="markdown-container"><p>В предложении <code>WHERE</code> могут присутствовать логические операторы</p><ul><li><code>AND</code> - логическое И;</li><li><code>OR</code> - логическое ИЛИ;</li><li><code>NOT</code> - отрицание.</li></ul><h3><code>AND</code> - логическое И</h3><p>Начнем с <code>AND</code>. Например, запрос для получения информации о сотруднице, работающей в магазине с идентификатором 200, занимающей должность <code>'SELLER'</code> по имени Наталия:</p><pre class="  language-sql"><code class="  language-sql"><span class="token keyword">SELECT</span> <span class="token operator">*</span>
            <p></p><span class="token keyword">FROM</span> employee
            <p></p><span class="token keyword">WHERE</span> store_id <span class="token operator">=</span> <span class="token number">200</span>
            <p></p><span class="token operator">AND</span> rank_id <span class="token operator">=</span> <span class="token string">'SELLER'</span>
            <p></p><span class="token operator">AND</span> first_name <span class="token operator">=</span> <span class="token string">'Наталия'</span></code></pre><table><thead><tr><th>#</th><th>employee_id</th><th>store_id</th><th>rank_id</th><th>first_name</th><th>last_name</th><th>middle_name</th><th >manager_id</th></tr></thead><tbody><tr><td >1</td><td >26</td><td >200</td><td >SELLER</td><td >Наталия</td><td >Потапова</td><td >Евсеевна</td><td >12</td></tr></tbody></table><h3><code>OR</code> - логическое ИЛИ</h3><p>Если хотя бы одно из условий истинно, то все выражение истинно.
            Например, сотрудников с должностями <code>'CHIEF'</code> и <code>'DIRECTOR'</code> , т.e. должность равна <code>'CHIEF'</code> ИЛИ должность равна <code>'DIRECTOR'</code>, можно получить запросом:</p><pre class="  language-sql"><code class="  language-sql"><span class="token keyword">SELECT</span> employee_id<span class="token punctuation">,</span>
                store_id<span class="token punctuation">,</span> 
                last_name<span class="token punctuation">,</span>
                first_name
            <p></p><span class="token keyword">FROM</span> employee
            <p></p><span class="token keyword">WHERE</span> rank_id <span class="token operator">=</span> <span class="token string">'CHIEF'</span>
            <p></p><span class="token operator">OR</span> rank_id <span class="token operator">=</span> <span class="token string">'DIRECTOR'</span></code></pre><table><thead><tr><th>#</th><th>employee_id</th><th>store_id</th><th>rank_id</th><th>last_name</th><th>first_name</th></tr></thead><tbody><tr><td>1</td><td>1</td><td >100</td><td >CHIEF</td><td >Иванов</td><td >Алексей</td></tr><tr><td >2</td><td >2</td><td >200</td><td >CHIEF</td><td >Маккормик</td><td >Кенни</td></tr><tr><td >3</td><td >3</td><td >400</td><td >CHIEF</td><td >Матвеева</td><td >Анна</td></tr><tr><td >4</td><td >4</td><td >500</td><td >CHIEF</td><td >Шмидт</td><td >Роман</td></tr><tr><td >5</td><td >5</td><td >600</td><td >CHIEF</td><td >Сухоруков</td><td >Виктор</td></tr><tr><td >6</td><td >6</td><td >800</td><td >CHIEF</td><td >Немцова</td><td >Светлана</td></tr><tr><td >7</td><td >7</td><td >900</td><td >CHIEF</td><td >Вершинина</td><td >Ольга</td></tr><tr><td >8</td><td >9</td><td >301</td><td >DIRECTOR</td><td >Антонов</td><td >Сергей</td></tr></tbody></table><p>P.S. Можно улучшить, используя <code>IN</code>, но об этом позже.</p><h3><code>NOT</code> - отрицание</h3><p>Логический оператор NOT отображает запись, если условие(я) НЕ ИСТИНА. К примеру, чтобы получить всех сотрудников, кроме занимающих должности <code>'CHIEF'</code> и <code>'DIRECTOR'</code>, необходимо выполнить запрос:</p><pre class="  language-sql"><code class="  language-sql"><span class="token keyword">SELECT</span> <span class="token operator">*</span>
            <p></p><span class="token keyword">FROM</span> employee
            <p></p><span class="token keyword">WHERE</span> <span class="token operator">NOT</span> <span class="token punctuation">(</span>
                    rank_id <span class="token operator">=</span> <span class="token string">'CHIEF' </span> 
                <span class="token operator">OR</span> rank_id <span class="token operator">=</span> <span class="token string">'DIRECTOR'</span><span class="token punctuation">)</span></code></pre><table><thead><tr><th>#</th><th>employee_id</th><th>store_id</th><th>rank_id</th><th>first_name</th><th>last_name</th><th >middle_name</th><th >manager_id</th></tr></thead><tbody><tr><td >1</td><td >8</td><td >201</td><td >CEO</td><td >Петр</td><td >Корсаков</td><td >Константинович</td><td ></td></tr><tr><td >2</td><td >10</td><td >302</td><td >GENERAL_MANAGER</td><td >Влад</td><td >Контур</td><td >Семенович</td><td ></td></tr><tr><td >3</td><td >11</td><td >100</td><td >MANAGER</td><td >Глеб</td><td >Тарасов</td><td >Авдеевич</td><td ></td></tr><tr><td >...</td><td >...</td><td >...</td><td >...</td><td >...</td><td >...</td><td >...</td><td >...</td></tr></tbody></table></div></div>

            &nbsp;<hr/>
            <div className="lesson-nav">
                <NavLink to="/sql7" className="waves-effect waves-light btn-large nav-bottom"> &larr; Предыдущий урок </NavLink>
                <NavLink to="/sql9" className="waves-effect waves-light btn-large nav-bottom"> Следующий урок &rarr; </NavLink>
            </div>
        </div>
    );
}

export default Sql8;
