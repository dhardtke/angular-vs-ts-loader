import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub66Component} from "./stub66.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub66Component
        }])
    ],
    declarations: [
        Stub66Component
    ]
})
export class Stub66Module {

}
