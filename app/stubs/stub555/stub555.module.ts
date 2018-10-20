import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub555Component} from "./stub555.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub555Component
        }])
    ],
    declarations: [
        Stub555Component
    ]
})
export class Stub555Module {

}
