import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub632Component} from "./stub632.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub632Component
        }])
    ],
    declarations: [
        Stub632Component
    ]
})
export class Stub632Module {

}
