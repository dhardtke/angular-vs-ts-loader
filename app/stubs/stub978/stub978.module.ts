import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub978Component} from "./stub978.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub978Component
        }])
    ],
    declarations: [
        Stub978Component
    ]
})
export class Stub978Module {

}
