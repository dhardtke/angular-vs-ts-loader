import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub698Component} from "./stub698.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub698Component
        }])
    ],
    declarations: [
        Stub698Component
    ]
})
export class Stub698Module {

}
