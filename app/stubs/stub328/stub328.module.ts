import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub328Component} from "./stub328.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub328Component
        }])
    ],
    declarations: [
        Stub328Component
    ]
})
export class Stub328Module {

}
