import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub915Component} from "./stub915.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub915Component
        }])
    ],
    declarations: [
        Stub915Component
    ]
})
export class Stub915Module {

}
