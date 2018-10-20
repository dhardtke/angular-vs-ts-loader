import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub376Component} from "./stub376.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub376Component
        }])
    ],
    declarations: [
        Stub376Component
    ]
})
export class Stub376Module {

}
