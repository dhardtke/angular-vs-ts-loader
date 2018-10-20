import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub371Component} from "./stub371.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub371Component
        }])
    ],
    declarations: [
        Stub371Component
    ]
})
export class Stub371Module {

}
