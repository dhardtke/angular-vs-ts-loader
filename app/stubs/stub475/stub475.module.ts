import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub475Component} from "./stub475.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub475Component
        }])
    ],
    declarations: [
        Stub475Component
    ]
})
export class Stub475Module {

}
