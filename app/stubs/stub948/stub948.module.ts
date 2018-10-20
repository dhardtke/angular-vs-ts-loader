import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub948Component} from "./stub948.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub948Component
        }])
    ],
    declarations: [
        Stub948Component
    ]
})
export class Stub948Module {

}
