import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub170Component} from "./stub170.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub170Component
        }])
    ],
    declarations: [
        Stub170Component
    ]
})
export class Stub170Module {

}
