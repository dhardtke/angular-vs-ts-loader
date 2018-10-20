import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub826Component} from "./stub826.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub826Component
        }])
    ],
    declarations: [
        Stub826Component
    ]
})
export class Stub826Module {

}
