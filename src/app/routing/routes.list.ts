import {ArticleComponent} from '../article/article.component';
import {InscriptionComponent} from '../inscription/inscription.component';
import {AppComponent} from '../app.component';
import {UserComponent} from '../user/user.component';
export const routes=[
    {
        path:'', redirectTo:'home', pathMatch:'full'
    },
    {
        path:'article', component:ArticleComponent
    },
    {
        path:'inscription', component:InscriptionComponent
    },
    {
        path:'utilisateurs', component:UserComponent
    }
]