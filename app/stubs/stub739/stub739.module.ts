import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub739Component} from "./stub739.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub739Component
        }])
    ],
    declarations: [
        Stub739Component
    ]
})
export class Stub739Module {

}
