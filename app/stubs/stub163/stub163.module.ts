import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub163Component} from "./stub163.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub163Component
        }])
    ],
    declarations: [
        Stub163Component
    ]
})
export class Stub163Module {

}
