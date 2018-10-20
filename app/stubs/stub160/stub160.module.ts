import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub160Component} from "./stub160.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub160Component
        }])
    ],
    declarations: [
        Stub160Component
    ]
})
export class Stub160Module {

}
