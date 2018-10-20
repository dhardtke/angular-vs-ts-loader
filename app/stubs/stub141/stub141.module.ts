import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub141Component} from "./stub141.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub141Component
        }])
    ],
    declarations: [
        Stub141Component
    ]
})
export class Stub141Module {

}
