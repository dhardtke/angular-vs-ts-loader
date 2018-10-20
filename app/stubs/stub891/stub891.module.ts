import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub891Component} from "./stub891.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub891Component
        }])
    ],
    declarations: [
        Stub891Component
    ]
})
export class Stub891Module {

}
