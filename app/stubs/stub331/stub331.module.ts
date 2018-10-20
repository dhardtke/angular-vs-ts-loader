import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub331Component} from "./stub331.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub331Component
        }])
    ],
    declarations: [
        Stub331Component
    ]
})
export class Stub331Module {

}
