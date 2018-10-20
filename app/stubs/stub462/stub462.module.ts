import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub462Component} from "./stub462.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub462Component
        }])
    ],
    declarations: [
        Stub462Component
    ]
})
export class Stub462Module {

}
