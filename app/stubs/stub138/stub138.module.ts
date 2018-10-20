import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub138Component} from "./stub138.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub138Component
        }])
    ],
    declarations: [
        Stub138Component
    ]
})
export class Stub138Module {

}
