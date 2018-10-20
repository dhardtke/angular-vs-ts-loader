import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub856Component} from "./stub856.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub856Component
        }])
    ],
    declarations: [
        Stub856Component
    ]
})
export class Stub856Module {

}
