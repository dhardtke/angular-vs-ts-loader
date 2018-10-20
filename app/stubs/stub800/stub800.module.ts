import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub800Component} from "./stub800.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub800Component
        }])
    ],
    declarations: [
        Stub800Component
    ]
})
export class Stub800Module {

}
