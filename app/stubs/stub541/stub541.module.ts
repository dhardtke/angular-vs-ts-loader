import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub541Component} from "./stub541.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub541Component
        }])
    ],
    declarations: [
        Stub541Component
    ]
})
export class Stub541Module {

}
