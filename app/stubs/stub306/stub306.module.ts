import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub306Component} from "./stub306.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub306Component
        }])
    ],
    declarations: [
        Stub306Component
    ]
})
export class Stub306Module {

}
