import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub892Component} from "./stub892.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub892Component
        }])
    ],
    declarations: [
        Stub892Component
    ]
})
export class Stub892Module {

}
