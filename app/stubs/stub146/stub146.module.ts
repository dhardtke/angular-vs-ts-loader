import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub146Component} from "./stub146.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub146Component
        }])
    ],
    declarations: [
        Stub146Component
    ]
})
export class Stub146Module {

}
