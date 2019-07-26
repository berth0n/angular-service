import {ArticleComponent} from '../article/article.component';
import {InscriptionComponent} from '../inscription/inscription.component';
import {AppComponent} from '../app.component';
export const routes=[
    {
        path:'', redirectTo:'home', pathMatch:'full'
    },
    {
        path:'article', component:ArticleComponent
    },
    {
        path:'inscription', component:InscriptionComponent
    }
]