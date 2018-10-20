import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub617Component} from "./stub617.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub617Component
        }])
    ],
    declarations: [
        Stub617Component
    ]
})
export class Stub617Module {

}
