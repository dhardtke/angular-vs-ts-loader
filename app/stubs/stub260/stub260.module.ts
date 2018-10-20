import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub260Component} from "./stub260.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub260Component
        }])
    ],
    declarations: [
        Stub260Component
    ]
})
export class Stub260Module {

}
