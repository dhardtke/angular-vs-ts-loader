import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub584Component} from "./stub584.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub584Component
        }])
    ],
    declarations: [
        Stub584Component
    ]
})
export class Stub584Module {

}
