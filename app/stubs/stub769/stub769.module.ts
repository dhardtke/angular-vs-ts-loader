import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub769Component} from "./stub769.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub769Component
        }])
    ],
    declarations: [
        Stub769Component
    ]
})
export class Stub769Module {

}
