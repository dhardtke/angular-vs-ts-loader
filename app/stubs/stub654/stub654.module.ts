import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub654Component} from "./stub654.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub654Component
        }])
    ],
    declarations: [
        Stub654Component
    ]
})
export class Stub654Module {

}
