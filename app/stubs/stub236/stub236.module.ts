import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub236Component} from "./stub236.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub236Component
        }])
    ],
    declarations: [
        Stub236Component
    ]
})
export class Stub236Module {

}
