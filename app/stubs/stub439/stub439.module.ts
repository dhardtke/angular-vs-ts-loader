import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub439Component} from "./stub439.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub439Component
        }])
    ],
    declarations: [
        Stub439Component
    ]
})
export class Stub439Module {

}
