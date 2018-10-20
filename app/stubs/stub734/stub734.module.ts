import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub734Component} from "./stub734.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub734Component
        }])
    ],
    declarations: [
        Stub734Component
    ]
})
export class Stub734Module {

}
