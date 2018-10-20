import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub98Component} from "./stub98.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub98Component
        }])
    ],
    declarations: [
        Stub98Component
    ]
})
export class Stub98Module {

}
