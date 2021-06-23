import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import MainPage from './pages/MainPage/MainPage';
import AuthPage from './pages/AuthPage/AuthPage';
import SqlPage from './pages/SqlPage/SqlPage';

import Lesson1 from './lessons/Lesson1';
import Lesson2 from './lessons/Lesson2';
import Lesson3 from './lessons/Lesson3';
import Lesson4 from './lessons/Lesson4';

import Sql1 from './lessons/Sql1';
import Sql2 from './lessons/Sql2';
import Sql3 from './lessons/Sql3';
import Sql4 from './lessons/Sql4';
import Sql5 from './lessons/Sql5';
import Sql6 from './lessons/Sql6';
import Sql7 from './lessons/Sql7';
import Sql8 from './lessons/Sql8';
import Sql9 from './lessons/Sql9';
import Sql10 from './lessons/Sql10';
import Sql11 from './lessons/Sql11';
import Sql12 from './lessons/Sql12';
import Sql13 from './lessons/Sql13';
import Sql14 from './lessons/Sql14';
import Sql15 from './lessons/Sql15';
import Sql16 from './lessons/Sql16';
import Sql17 from './lessons/Sql17';
import Sql18 from './lessons/Sql18';
import Sql19 from './lessons/Sql19';
import Sql20 from './lessons/Sql20';
import Sql21 from './lessons/Sql21';
import Sql22 from './lessons/Sql22';
import Sql23 from './lessons/Sql23';
import Sql24 from './lessons/Sql24';
import Sql25 from './lessons/Sql25';

export const useRoutes = (isLogin) =>{
    if(isLogin){
        return(
            <Switch>
                <Route path="/" exact component={MainPage} />

                <Route path="/Sql" exact component={SqlPage} />

                <Route path="/lesson1" exact component={Lesson1} />
                <Route path="/lesson2" exact component={Lesson2} />
                <Route path="/lesson3" exact component={Lesson3} />
                <Route path="/lesson4" exact component={Lesson4} />

                <Route path="/sql1" exact component={Sql1} />
                <Route path="/sql2" exact component={Sql2} />
                <Route path="/sql3" exact component={Sql3} />
                <Route path="/sql4" exact component={Sql4} />
                <Route path="/sql5" exact component={Sql5} />
                <Route path="/sql6" exact component={Sql6} />
                <Route path="/sql7" exact component={Sql7} />
                <Route path="/sql8" exact component={Sql8} />
                <Route path="/sql9" exact component={Sql9} />
                <Route path="/sql10" exact component={Sql10} />
                <Route path="/sql11" exact component={Sql11} />
                <Route path="/sql12" exact component={Sql12} />
                <Route path="/sql13" exact component={Sql13} />
                <Route path="/sql14" exact component={Sql14} />
                <Route path="/sql15" exact component={Sql15} />
                <Route path="/sql16" exact component={Sql16} />
                <Route path="/sql17" exact component={Sql17} />
                <Route path="/sql18" exact component={Sql18} />
                <Route path="/sql19" exact component={Sql19} />
                <Route path="/sql20" exact component={Sql20} />
                <Route path="/sql21" exact component={Sql21} />
                <Route path="/sql22" exact component={Sql22} />
                <Route path="/sql23" exact component={Sql23} />
                <Route path="/sql24" exact component={Sql24} />
                <Route path="/sql25" exact component={Sql25} />

                <Redirect to="/" />

            </Switch>
        )
    }

    return(
        <Switch>
            <Route path="/login" exact component={AuthPage} />
            <Redirect to="/login" />

        </Switch>
    )
}